"""Initial migration.

Revision ID: b4efd8801e79
Revises: 
Create Date: 2020-04-28 20:10:42.786534

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'b4efd8801e79'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('example',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('full_name', sa.String(length=64), nullable=True),
    sa.Column('email', sa.String(length=120), nullable=True),
    sa.Column('location', sa.String(length=128), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('example')
    # ### end Alembic commands ###
